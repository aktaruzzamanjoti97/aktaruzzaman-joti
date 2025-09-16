'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Tab.module.css';
import { usePathname } from 'next/navigation';

interface TabProps {
	icon: string;
	filename: string;
	path: string;
	className?: string;
}

const Tab = ({ icon, filename, path, className }: TabProps) => {
	const pathname = usePathname();

	return (
		<Link href={path}>
			<div className={`${styles.tab} ${pathname === path && styles.active}`}>
				{className ? (
					<div>
						<span className={className}></span>
					</div>
				) : (
					<Image src={icon} alt={filename} height={18} width={18} />
				)}
				<p>{filename}</p>
			</div>
		</Link>
	);
};

export default Tab;
