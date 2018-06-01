import Link from 'umi/link';
import styles from './index.css';
import { Button } from 'antd';

export default () => {
    return (
        <div className={styles.normal}>
            ListPage
            <br />
            <Link to="/list"><Button type="primary">go to /list</Button></Link>
        </div>
    );
}