import { FC } from 'react'

import styles from './loader.module.sass'

const Loader: FC = () => <span className={styles.loader} role='status'></span>

export default Loader
