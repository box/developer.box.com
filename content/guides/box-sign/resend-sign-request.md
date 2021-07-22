---
rank: 3
---

# Resend Box Sign Request

The resend a sign request endpoint can be used to resend sign request emails to
any remaining signers. A sign request can only be resent if the status is: new,
sent, or viewed. A sign request cannot be resent if the status is: signed,
cancelled, declined, or expired. If a sign request was recently sent, you will
need to wait 10 minutes before resending. If you try before this time has
passed you will receive a 400 error. 

<Message type='tip'>
Reminder emails can be enabled when creating a sign request to avoid the need to
resend a sign request.
</Message>
