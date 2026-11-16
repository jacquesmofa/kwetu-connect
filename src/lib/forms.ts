/**
 * Every form on the site sends through Web3Forms to info@kwetuconnect.org.
 * The access key is public by design (Web3Forms: "You can use it in client side code").
 * Success is reported only when Web3Forms confirms the message was accepted.
 */
const WEB3FORMS_KEY = 'b231fd38-ebeb-445c-a43e-ca760b118db5';

export async function sendForm(subject: string, fields: URLSearchParams | Record<string, string>): Promise<void> {
  const data = fields instanceof URLSearchParams ? Object.fromEntries(fields.entries()) : fields;
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject, from_name: 'KWETU CONNECT website', replyto: data.email || undefined, ...data }),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.success) throw new Error(result?.message || 'The message could not be sent');
}
