// HamburgerButton.jsx

const HamburgerButton = ({
  isMenuOpen,
  setIsMenuOpen,
  className = "",
  barColor = "#111827",
}) => {
  return (
    <div className={className}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`toggle ${isMenuOpen ? "active" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </button>

      {/* The style block uses the injected 'barColor' variable.
        This ensures the bars match the dynamic text color of the header. 
      */}
      <style jsx>{`
        .toggle {
          position: relative;
          width: 35px;
          height: 35px;
          /* Remove default button styles */
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px; /* Adjusted gap for better appearance */
          transition-duration: 0.5s;
        }

        .bars {
          width: 100%;
          height: 3px; /* Slightly thinner bars */
          background-color: ${barColor}; /* Dynamic color */
          border-radius: 4px;
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }

        /* Adjusting widths for the default look */
        #bar1,
        #bar3 {
          width: 75%;
        }

        /* ACTIVE STATE (X) */
        .toggle.active {
          /* No rotation on the whole button for a cleaner X */
          transform: rotate(0deg);
          transition-duration: 0.5s;
        }

        .toggle.active .bars {
          position: absolute;
        }

        /* Center bar disappears */
        .toggle.active #bar2 {
          opacity: 0;
          transform: scaleX(0);
        }

        /* Top bar rotates 45deg */
        .toggle.active #bar1 {
          width: 100%;
          transform: translateY(-6px) rotate(45deg);
        }

        /* Bottom bar rotates -45deg */
        .toggle.active #bar3 {
          width: 100%;
          transform: translateY(-6px) rotate(-45deg);
        }
      `}</style>
    </div>
  );
};

export default HamburgerButton;
