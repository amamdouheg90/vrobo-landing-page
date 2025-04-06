"use server"

interface ContactFormData {
    name: string
    email: string
    phone: string
    message: string
}

const SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/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"

export async function sendContactFormToSlack(data: ContactFormData) {
    try {
        const response = await fetch(SLACK_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: `New Contact Form Submission\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Message:* ${data.message}`,
            }),
        })

        if (!response.ok) {
            throw new Error("Failed to send to Slack")
        }

        return { success: true }
    } catch (error) {
        console.error("Error sending to Slack:", error)
        return { success: false, error: "Failed to send message" }
    }
} 