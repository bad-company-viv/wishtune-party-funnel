import React, { useEffect } from 'react';
import TextPage from '../TextPage';

const content = `
### 1. Personal Identification Information
We may collect personal identification information from you in a variety of ways, including but not limited to when you:
- Place an order
- Subscribe to the newsletter
- Fill out a form
- Engage with us via email, contact forms, or social media

You may be asked for, as appropriate, your name, email address, billing address, phone number, and payment details.

### 2. How We Use Collected Information
We collect and use your personal information for the following purposes:
- To process transactions
- To send periodic emails and updates
- To improve our website and user experience
- To provide customer service
- To deliver the products purchased

We do not sell, trade, or rent your personal information to others.

### 3. Protection of Your Information
We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. Payment data is handled by secure third-party processors (e.g., Stripe, Razorpay) and is never stored directly on our servers.

### 4. Third-Party Services
We may use third-party services to help operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. These third parties are bound by confidentiality and data protection obligations.

### 5. Cookies
Our Site may use "cookies" to enhance user experience. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Please note that some parts of the Site may not function properly without cookies.

### 6. Data Retention
We retain personal data for as long as necessary to fulfill the purposes for which we collected it, including to satisfy legal, accounting, or reporting requirements.

### 7. Your Rights
You may request:
- Access to the data we hold about you
- Correction of any inaccurate data
- Deletion of your data (subject to exceptions under law)

To make a request, please contact us at **support@wishtune.com**.

### 8. Changes to This Privacy Policy
We reserve the right to update this Privacy Policy at any time. When we do, we will revise the effective date at the top of this page. Continued use of the Site after such changes indicates your acceptance of the updated policy.

### 9. Contacting Us
If you have any questions about this Privacy Policy, please contact us at:
- Email: **support@wishtune.com**
`;

const PrivacyPolicy = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return <TextPage title="Privacy Policy" content={content} date="Last Updated: 2026" />;
};

export default PrivacyPolicy;
