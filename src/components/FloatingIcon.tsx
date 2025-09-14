interface FloatingIconProps {
  icon: string;
  className?: string;
}

const FloatingIcon = ({ icon, className = "" }: FloatingIconProps) => {
  return (
    <div
      className={`
        absolute text-3xl select-none pointer-events-none
        animate-float opacity-60 hover:opacity-80 transition-opacity
        ${className}
      `}
      style={{ 
        fontSize: '2rem',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
      }}
    >
      {icon}
    </div>
  );
};

export default FloatingIcon;