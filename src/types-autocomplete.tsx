type LooseAutocomplete<T extends string> = T | Omit<string, T>;

type IconSize = LooseAutocomplete<'sm' | 'md'>;

interface IconProps {
  size: IconSize;
}

export const Icon = (props: IconProps) => {
  return <></>;
};

const MyComponent = () => {
  return (
    <>
      <Icon size="sm" />
      <Icon size="md" />
      <Icon size="abc" />
    </>
  );
};
