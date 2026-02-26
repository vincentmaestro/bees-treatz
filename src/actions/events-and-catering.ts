'use server';
import { createTransport } from 'nodemailer';
import { defaultActionState } from '@/app/components/events-form';

export async function sendMail(_: typeof defaultActionState, formdata: FormData) {
    const name = String(formdata.get('name'));
    const phone = String(formdata.get('phone'));
    const email = String(formdata.get('email'));
    const eventType = String(formdata.get('event-type'));
    const guestCount = String(formdata.get('guest-count'));
    const eventDate = String(formdata.get('event-date'));
    const location = String(formdata.get('location'));
    const budget = String(formdata.get('budget'));
    const details = String(formdata.get('details'));

    const transporter = createTransport({
        host: 'mail.etinpower.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sender@etinpower.com',
            pass: process.env.SENDER_PW
        }
    });

    try {
        const info = await transporter.sendMail({
            from: 'sender@etinpower.com',
            to: email,
            subject: '*New Event Catering Enquiry*',
            replyTo: email,
            html: `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Event Enquiry - Bee's Treatz</title>
                </head>
                <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
                
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb;">
                    <tr>
                    <td style="padding: 40px 20px;">
                        
                        <!-- Main Container -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                        
                        <!-- Header -->
                        <tr>
                            <td style="background: linear-gradient(135deg, #e63946 0%, #f4af33 50%, #ffd60a 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 900; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                                🎉 New Event Enquiry
                            </h1>
                            <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.95;">
                                Bee's Treatz Event Catering
                            </p>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 0 30px 20px 30px;">
                            <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 700; border-bottom: 2px solid #f4af33; padding-bottom: 8px;">
                                👤 Customer Information
                            </h2>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 120px; color: #6b7280; font-size: 14px; font-weight: 600;">Name:</td>
                                        <td style="color: #111827; font-size: 14px; font-weight: 700;">${name}</td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                
                                <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 120px; color: #6b7280; font-size: 14px; font-weight: 600;">Phone:</td>
                                        <td style="color: #111827; font-size: 14px;">
                                        <a href="tel:${phone}" style="color: #f4af33; text-decoration: none; font-weight: 600;">${phone}</a>
                                        </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                
                                <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 120px; color: #6b7280; font-size: 14px; font-weight: 600;">Email:</td>
                                        <td style="color: #111827; font-size: 14px;">
                                        <a href="mailto:${email}" style="color: #f4af33; text-decoration: none; font-weight: 600;">${email}</a>
                                        </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                            </table>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 0 30px 20px 30px;">
                            <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 700; border-bottom: 2px solid #f4af33; padding-bottom: 8px;">
                                📅 Event Details
                            </h2>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 120px; color: #6b7280; font-size: 14px; font-weight: 600;">Event Type:</td>
                                        <td style="color: #111827; font-size: 14px; font-weight: 700; text-transform: capitalize;">${eventType}</td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                
                                <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 120px; color: #6b7280; font-size: 14px; font-weight: 600;">Guest Count:</td>
                                        <td style="color: #111827; font-size: 14px; font-weight: 700;">${guestCount} guests</td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                
                                <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 120px; color: #6b7280; font-size: 14px; font-weight: 600;">Event Date:</td>
                                        <td style="color: #111827; font-size: 14px; font-weight: 700;">${eventDate}</td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                
                                <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 120px; color: #6b7280; font-size: 14px; font-weight: 600;">Location:</td>
                                        <td style="color: #111827; font-size: 14px;">${location}</td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                
                                <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 120px; color: #6b7280; font-size: 14px; font-weight: 600;">Budget Range:</td>
                                        <td style="color: #111827; font-size: 14px; font-weight: 700;">${budget}</td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                            </table>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 0 30px 20px 30px;">
                            <h2 style="margin: 0 0 12px 0; color: #111827; font-size: 18px; font-weight: 700; border-bottom: 2px solid #f4af33; padding-bottom: 8px;">
                                Additional Details
                            </h2>
                            <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                                ${details}
                            </div>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 0 30px 30px 30px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                <td style="text-align: center; padding-top: 10px;">
                                    <a href="tel:${phone}" style="display: inline-block; background: linear-gradient(135deg, #e63946 0%, #f4af33 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 700; font-size: 16px; margin: 5px;">
                                    📞 Call Customer
                                    </a>
                                    <a href="mailto:${email}" style="display: inline-block; background-color: #111827; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 700; font-size: 16px; margin: 5px;">
                                    ✉️ Send Email
                                    </a>
                                </td>
                                </tr>
                            </table>
                            </td>
                        </tr>

                        <tr>
                            <td style="background-color: #f9fafb; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                                <strong style="color: #111827;">Bee's Treatz</strong> Event Catering
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                This enquiry was submitted via beestreatz.uk
                            </p>
                            <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 12px;">
                                ${new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })}
                            </p>
                            </td>
                        </tr>

                        </table>
                        
                    </td>
                    </tr>
                </table>

                </body>
            </html>
            `
        });

        if(!info.response.includes('250 OK'))
            throw new Error('Failed to send. Please try again.');

        return {
            success: true,
            message: 'Message sent successfully!'
        }
    }
    catch(err) {
        return {
            success: false,
            message: 'Failed to send. Please try again.'
        }
    }
}
