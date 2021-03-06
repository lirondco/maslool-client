import React from "react";
import cx from "classnames";
import { parseISO, format as formatDate } from "date-fns";
import "./Utils.css";

export function NiceDate({ date, format = "dd MMM yyyy" }) {
  let datedDate = parseISO(date);
  return formatDate(datedDate, format);
}

export function Label({ className, ...props }) {
  return <label className={cx("Label", className)} {...props} />;
}

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={cx("Input", className)}
      type="text"
      ref={ref}
      {...props}
    />
  );
});

export function Required({ className, ...props }) {
  return (
    <span className={cx("Required", className)} {...props}>
      &#42;
    </span>
  );
}

export function Textarea({ className, ...props }) {
  return <textarea className={cx("Textarea", className)} {...props} />;
}

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return <button className={cx("Button", className)} ref={ref} {...props} />;
});
