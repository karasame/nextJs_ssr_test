export const getData = (api: string) => {
  const getServerSideProps = async () => {
    const res = await fetch(api);
    const data = await res.json();
    return {
      props: { data },
    };
  };
  return getServerSideProps;
};
