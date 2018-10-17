import styles from './index.css';

export default function() {
  return (
    <div className={styles.main}>
      <img className={styles.pic} src='https://cdn.nlark.com/yuque/0/2018/png/103904/1539790634786-d1dddd82-eed8-41b7-b83a-a3ecd2527b78.png'></img>
      <div>
        <h3>我们在这里</h3>
        <ul className={styles.list}>
          <li><a href='https://www.yuque.com/flying.ni/the-tower'>世界的瞭望哨</a></li>
          <li><a href='https://www.yuque.com/hankunfang/thinking'>爱的小屋</a></li>
        </ul>
      </div>
    </div>
  );
}
