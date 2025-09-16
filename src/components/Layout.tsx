'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import Bottombar from '@/components/Bottombar';
import Explorer from '@/components/Explorer';
import Sidebar from '@/components/Sidebar';
import Tabsbar from '@/components/Tabsbar';
import Titlebar from '@/components/Titlebar';

import styles from '@/styles/Layout.module.css';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	// set scroll to top of main content on url pathname change
	const pathname = usePathname();
	useEffect(() => {
		const main = document.getElementById('main-editor');
		if (main) {
			main.scrollTop = 0;
		}
	}, [pathname]);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	}, []);

	return (
		<>
			<Titlebar />
			<div className={styles.main}>
				<Sidebar />
				<Explorer />
				<div style={{ width: '100%' }}>
					<Tabsbar />
					<main id='main-editor' className={styles.content}>
						{children}
					</main>
				</div>
			</div>
			<Bottombar />
		</>
	);
};

export default Layout;
