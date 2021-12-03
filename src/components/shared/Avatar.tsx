import styled from "styled-components";

interface Props {
  src: string;
  alt?: string;
  className?: string;
}

export function Avatar({ className, src, alt }: Props) {
  return (
    <StyledAvatar className={className}>
      <img src={src} alt={alt} />
    </StyledAvatar>
  );
}

const StyledAvatar = styled.div`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  outline: 4px solid #fff;
  img {
    height: 100%;
    width: 100%;
  }
`;
