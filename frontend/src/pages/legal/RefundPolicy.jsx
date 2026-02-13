import React, { useEffect } from 'react';
import TextPage from '../TextPage';

const content = `
### 1. Digital Products Only
All products offered on Wishtune are strictly digital and non-tangible. No physical products will be shipped or delivered.

### 2. No Refunds
All sales are final. Due to the instant access and digital delivery of our products, we do not offer refunds, exchanges, or cancellations under any circumstances.
This includes but is not limited to:
- Accidental purchases
- Change of mind
- Unmet expectations
- Technical issues due to user error (e.g., wrong email input)
- Inability to download files due to personal device or internet limitations

Please read all product descriptions carefully before purchasing.

### 3. Product Clarity
By purchasing from Wishtune, you acknowledge that:
- You are purchasing the affirmation content only
- Any music used is a gifted background and not part of the paid product
- The background music is for personal use only, and not for resale, redistribution, or commercial use

### 4. Unauthorized Distribution
Redistributing, reselling, or uploading our products to any platform or file-sharing service is strictly prohibited and will result in a permanent ban from our store, along with potential legal action.

### 5. Chargebacks
Filing a chargeback after purchasing is considered fraudulent behavior and is a breach of our terms. Any customer initiating a chargeback will:
- Be permanently banned from purchasing again
- Lose access to all previously purchased digital products
- Be subject to the recovery of fees and legal action if necessary

### 6. Contact Policy
If you are experiencing technical difficulties or have questions about your product, contact us at **support@wishtune.com**. Refund or cancellation requests will not be accepted.
`;

const RefundPolicy = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return <TextPage title="Refund & Cancellation Policy" content={content} date="Last Updated: 2026" />;
};

export default RefundPolicy;
