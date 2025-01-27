import { FC, useState, KeyboardEvent } from "react";

import styles from "./index.module.scss";

export type TextInputWithAddButtonProps = {
  onAdd: (value: string) => void;
  placeholder?: string;
  buttonProps?: {
    buttonText: string;
  };
};

export const TextInputWithAddButton: FC<TextInputWithAddButtonProps> = ({
  onAdd,
  placeholder = "Add",
  buttonProps = { buttonText: "Add" },
}) => {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
      <button onClick={submit} className={styles.button}>
        {buttonProps.buttonText}
      </button>
    </div>
  );
};
