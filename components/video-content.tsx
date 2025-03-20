interface VideoContent {
  video: string
}

export const VideoContent = ({ video }: VideoContent) => {
  return (
    <video width={340} height={240} autoPlay>
      <source src={video} type="video/mp4" />
      <track
        kind="captions"
        srcLang="en"
        label="English"
        src=""
      />
      Your browser does not support the video tag.
    </video>
  )
}
