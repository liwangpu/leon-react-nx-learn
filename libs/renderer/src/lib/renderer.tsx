import styles from './renderer.module.less';

/* eslint-disable-next-line */
export interface RendererProps {}

export function Renderer(props: RendererProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Renderer!</h1>
    </div>
  );
}

export default Renderer;
