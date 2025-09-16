import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
	return (
		<div className={styles.tabs}>
			<Tab icon='/logos/react_icon.svg' filename='home.tsx' path='/' />
			<Tab icon='/logos/html_icon.svg' filename='index.html' path='/about' />
			<Tab icon='/logos/html_icon.svg' filename='about.html' path='/about' />
			<Tab
				icon='/logos/css_icon.svg'
				filename='contact.css'
				path='/contact'
			/>
			<Tab
				icon='/logos/python.png'
				filename='experience.py'
				path='/experience'
			/>
			<Tab icon='/logos/c++.png' filename='projects.cpp' path='/projects' />
			<Tab icon='/logos/js_icon.svg' filename='skills.js' path='/skills' />
			<Tab icon='/logos/gmail.svg' filename='email.tsx' path='/email' />

			<Tab icon='/logos/vue.png' filename='articles.vue' path='/articles' />
			<Tab
				icon='/logos/json_icon.svg'
				filename='settings.json'
				path='/settings'
			/>
			<Tab
				icon='/logos/markdown_icon.svg'
				filename='github.md'
				path='/github'
			/>
		</div>
	);
};

export default Tabsbar;
