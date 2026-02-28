export default function MatterportEmbed({
  url = "https://my.matterport.com/show/?m=mVUh1bR82Tj",
  title = "3D Virtual Tour",
}: {
  url?: string;
  title?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        borderRadius: "2rem",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <iframe
        src={url}
        title={title}
        allowFullScreen
        allow="xr-spatial-tracking"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}
