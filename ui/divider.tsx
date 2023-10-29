const Divider = ({ h = '1px' }: { h?: string }) => {
  const styles = `relative mt-3 flex-1 h-[${h}] bg-zinc-200 dark:bg-zinc-700`;
  return <span className={styles}></span>;
};

export default Divider;
