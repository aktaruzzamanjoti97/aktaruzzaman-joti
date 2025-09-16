"use client"

import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Tab.module.css';
import { usePathname } from 'next/navigation';

interface TabProps {
	icon: string;
	filename: string;
	path: string;
}

const Tab = ({ icon, filename, path }: TabProps) => {
	const pathname = usePathname();

	return (
		<Link href={path}>
			<div className={`${styles.tab} ${pathname === path && styles.active}`}>
				<Image src={icon} alt={filename} height={18} width={18} />
				<p>{filename}</p>
			</div>
		</Link>
	);
};

export default Tab;
