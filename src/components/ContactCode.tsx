import styles from '@/styles/ContactCode.module.css';

const contactItems = [
	{
		social: 'website',
		link: 'aktaruzzaman-joti',
		href: 'https://github.com/aktaruzzamanjoti97/aktaruzzaman-joti.vercel.app',
	},
	{
		social: 'email',
		link: 'aktaruzzamanjoti1@gmail.com',
		href: 'mailto:@aktaruzzamanjoti1.com',
	},
	{
		social: 'github',
		link: 'aktaruzzamanjoti97',
		href: 'https://github.com/aktaruzzamanjoti97',
	},
	{
		social: 'linkedin',
		link: 'aktaruzzaman-joti',
		href: 'https://www.linkedin.com/in/aktaruzzaman-joti',
	},
	{
		social: 'twitter',
		link: 'aktaruzzaman.joti',
		href: '',
	},
	{
		social: 'telegram',
		link: 'aktaruzzamnanjoti',
		href: '',
	},
	{
		social: 'peerlist',
		link: 'joti97',
		href: 'https://peerlist.io/joti97',
	},
];

const ContactCode = () => {
	return (
		<div className={styles.code}>
			<p className={styles.line}>
				<span className={styles.className}>.socials</span> &#123;
			</p>
			{contactItems.map((item, index) => (
				<p className={styles.line} key={index}>
					&nbsp;&nbsp;&nbsp;{item.social}:{' '}
					<a href={item.href} target='_blank' rel='noopener'>
						{item.link}
					</a>
					;
				</p>
			))}
			<p className={styles.line}>&#125;</p>
		</div>
	);
};

export default ContactCode;
