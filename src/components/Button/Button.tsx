interface iButton {
  type: "outlined" | "fill" | "fill-alt";
  text: string;
  className: string;
}

export default function Button({ type, text, className }: iButton) {
  if (type === "outlined") {
    return (
      <button
        className={
          "hover:bg-[#ffffff] hover:text-primary cursor-pointer uppercase text-xs text-[white] font-medium border bg-[#1f92f4] border-solid border-[#1f92f4] py-2.5 px-4 rounded-full" +
          " " +
          className
        }
      >
        {text}
      </button>
    );
  }

  return <></>;
}
