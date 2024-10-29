import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using `clsx` and merges Tailwind CSS classes using `twMerge`.
 *
 * This utility function takes any number of class name arguments, processes them
 * with `clsx` to handle conditional class names and arrays, and then merges the
 * resulting class string using `twMerge` to ensure that Tailwind CSS classes
 * are combined correctly, resolving any conflicts according to Tailwind's rules.
 *
 * @param {...ClassValue[]} inputs - A list of class name values that can be strings,
 * arrays, or objects where the keys are class names and the values are booleans.
 * @returns {string} - A single string of merged and resolved class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
