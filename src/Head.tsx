export default function Head({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </>
  );
}
