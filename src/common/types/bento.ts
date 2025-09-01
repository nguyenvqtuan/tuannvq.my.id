export type BentoItemProps = {
  title: string;
  description: string;
  label?: string;
  icon?: React.ReactNode | string;
  visual?: React.ReactNode | string;
  href?: string;
  colSpan?: number;
  className?: string;
  isShow?: boolean;
};
