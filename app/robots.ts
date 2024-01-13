import { domain } from '~/lib/user_details';

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
            },
        ],
        sitemap: `https://${domain}/sitemap.xml`,
        host: `https://${domain}`,
    };
}