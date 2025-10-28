import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type EventCardProps = {
	children: React.ReactNode;
	active?: boolean;
    href?: string;
	index?: number;
	className?: string;
	onClick?: () => void;
};

export const EventCard: React.FC<EventCardProps> = ({
	children,
	active = true,
    href = undefined,
	index = 0,
	className = "",
}) => {
	const activeClasses = "bg-white/5 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-8 hover:bg-white/10 transition-all";
	const inactiveClasses = "bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-gray-400 opacity-95";
    const cursorClass = href ? "cursor-pointer" : "cursor-default";

	const combined = `${active ? activeClasses : inactiveClasses} ${cursorClass} ${className}`.trim();


	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={active ? { scale: 1.05, y: -5 } : undefined}
			className={combined}
		>
            <Link href={href || '#'} className={cursorClass}>{/* Use '#' as fallback to avoid undefined href */}
			    {children}
            </Link>
		</motion.div>
	);
};

export default EventCard;

