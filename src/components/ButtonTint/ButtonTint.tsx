const ButtonTint = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-[5px] h-[155px] bg-beige z-[100] opacity-90" />
      <div className="fixed bottom-0 left-[5px] w-[10px] h-[155px] bg-gradient-to-r from-beige z-[100] opacity-80" />

      <div className="fixed bottom-0 right-[5px] w-[10px] h-[155px] bg-gradient-to-l from-beige z-[100] opacity-80" />
      <div className="fixed bottom-0 right-0 w-[5px] h-[155px] bg-beige z-[100] opacity-90" />
    </>
  );
};

export default ButtonTint;
