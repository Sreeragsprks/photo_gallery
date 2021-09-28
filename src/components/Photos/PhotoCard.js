import "./Photos.css";

export const PhotoCard = ({ avatarUser }) => {
  const { first_name, last_name, avatar } = avatarUser;
  return (
    <div className="photocard">
      <div>
        <img src={avatar} alt={`${first_name} ${last_name}`} />
      </div>
      <div>
        <p>{`${first_name} ${last_name}`}</p>
      </div>
    </div>
  );
};
