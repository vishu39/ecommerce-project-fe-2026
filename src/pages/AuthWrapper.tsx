import './stylesheet/authWrapper.css'

interface Props {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: Props) => {
  return (
    <div
    className='wrapperContainer'
    >
      <div className='wrapper_flex'>
        <div className='wrapper_left'></div>
        <div className='wrapper_right'>{children}</div>
      </div>
    </div>
  );
};

export default AuthWrapper;
