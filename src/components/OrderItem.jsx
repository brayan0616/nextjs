import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import close from '../assets/icons/icon_close.png';
import styles from '../styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} width={50} height={50} alt={product?.title} />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image className={(styles.pointer, styles['more-clickable-area'])} src={close} width={15} height={15} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
};

export default OrderItem;
