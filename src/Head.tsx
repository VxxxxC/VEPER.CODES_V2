export interface HeaderType {
  title?: string;
  description?: string;
}

export default function Head({ title, description }: HeaderType) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </>
  );
}
