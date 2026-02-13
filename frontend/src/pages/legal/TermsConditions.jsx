import React, { useEffect } from 'react';
import TextPage from '../TextPage';

const content = `
### 1. Consent and Capacity
To use our services, you must be at least 18 years old and capable of forming a binding contract. By accessing the Site and purchasing our products, you warrant that you meet this requirement and agree to be legally bound by these Terms.

### 2. Intellectual Property Rights
All content on Wishtune, including but not limited to audio files, designs, texts, branding, visuals, and all digital products, is the sole property of Wishtune and is protected under Indian and international copyright laws. Unauthorized reproduction, sharing, resale, or distribution of any content is strictly prohibited and subject to legal action.
You are purchasing the affirmation layer only. Any music or beats embedded in the product are provided as a gift and are not intended for commercial or resale use.

### 3. User Content
By submitting testimonials, reviews, or comments to us, you grant Wishtune a perpetual, worldwide, royalty-free license to use, reproduce, and publish your content for marketing, educational, or promotional purposes.

### 4. User Responsibilities
- You agree not to share, resell, or redistribute our digital files.
- You will not share your account access, downloads, or login credentials.
- You will use the Site lawfully and under these Terms.

### 5. Personal Information and Privacy
Your submission of personal data is governed by our Privacy Policy. By using this Site, you consent to such data handling practices.

### 6. Disclaimer
All content on this Site is for informational and entertainment purposes only. Wishtune does not offer professional, legal, medical, or psychological advice. We do not guarantee outcomes, results, or transformations.
Our digital products are not intended to diagnose, treat, cure, or prevent any condition. Use them at your discretion.

### 7. Limitation of Liability
To the fullest extent permitted by law, Wishtune disclaims any liability for damages, direct, indirect, incidental, or consequential, arising from your use of this Site or our products. You agree to use this Site and our digital products at your own risk.

### 8. Indemnification
You agree to indemnify, defend, and hold harmless Wishtune, its affiliates, team, and agents from any claims, liabilities, costs, or expenses (including legal fees) arising from your use of the Site or breach of these Terms.

### 9. Payments
You are responsible for providing accurate billing information. Incomplete, failed, or disputed transactions may result in access being revoked to the purchased digital product(s) without a refund.

### 10. Refunds and Cancellations
All sales are final. Due to the digital nature of our products, no refunds, exchanges, or cancellations will be issued under any circumstances.
You are responsible for reading all product details before purchasing. By purchasing, you confirm your understanding that you are buying affirmation content only.

### 11. Chargebacks
Any chargeback attempt will be considered fraudulent and may result in legal action. Users who initiate chargebacks will be permanently banned from future purchases, and access to all digital content will be revoked.

### 12. Termination
We reserve the right to suspend or terminate access to our products or services at our sole discretion, including in cases of misuse, harassment, or breach of these Terms. No refunds will be given in such cases.

### 13. Confidentiality
You agree to keep confidential any proprietary or sensitive information obtained through your purchase or interaction with Wishtune, including but not limited to scripts, processes, and affirmations.

### 14. Choice of Law
These Terms are governed by and construed under the laws of India. You agree that any disputes will be handled in the jurisdiction of New Delhi, India.

### 15. Dispute Resolution
You agree to first attempt informal resolution by contacting us. If resolution is not achieved, you agree to binding arbitration in New Delhi and waive your right to participate in any class action or jury trial.

### 16. Severability
If any part of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.

### 17. Changes to These Terms
We may update these Terms at any time. It is your responsibility to review them periodically. Continued use of the Site constitutes your agreement to any changes.

### 18. Contact Us
If you have any questions, please contact: **support@wishtune.com**
`;

const TermsConditions = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return <TextPage title="Terms & Conditions" content={content} date="Last Updated: 2026" />;
};

export default TermsConditions;
