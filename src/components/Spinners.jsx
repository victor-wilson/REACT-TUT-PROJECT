import { ClipLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinners = ({loading}) => {
  return (
      <ClipLoader loading={loading} size={150} color="#4e3bf6" cssOverride={override} />
  );
}
export default Spinners

