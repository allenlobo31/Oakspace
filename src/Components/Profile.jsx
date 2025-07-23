import CloseIcon from '@mui/icons-material/Close';

export default function Profile({ open, onOpenChange, direction }) {
  const options = ["Orders", "Manage Account", "Wishlist"];

  const baseDrawerClasses = "fixed bg-white shadow-lg transform transition-transform duration-400 ease-in-out z-50";
  const overlayClasses = "fixed w-full inset-0 bg-black/40 bg-opacity-50 z-40 transition-opacity duration-400";

  let drawerSpecificClasses = "";
  let drawerOpenTransform = "";
  let drawerClosedTransform = "";
  let drawerContainerClasses = "h-full"; 

  if (direction === "bottom") {
    drawerSpecificClasses = "w-full bottom-0 left-0 right-0 h-full max-h-[80vh] rounded-t-none";
    drawerOpenTransform = "translate-y-0";
    drawerClosedTransform = "translate-y-full";
  } else { 
    drawerSpecificClasses = "top-0 right-0 bottom-0 w-80"; 
    drawerOpenTransform = "translate-x-0";
    drawerClosedTransform = "translate-x-full"; 
    drawerContainerClasses = "h-full flex flex-col";
  }

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className={overlayClasses}
          onClick={() => onOpenChange(false)}
        ></div>
      )}

      {/* Drawer Content */}
      <div className={`${baseDrawerClasses} ${drawerSpecificClasses} ${open ? drawerOpenTransform : drawerClosedTransform}`}>
        <div className={drawerContainerClasses}>
          <div className="mt-5">
            <div className="flex justify-end px-4">
              <button
                className="w-6 h-6 flex items-center justify-center"
                onClick={() => onOpenChange(false)}
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-row justify-between mt-8 p-4">
              <div className="w-20 h-12 font-bold text-2xl text-start pl-3">
                Hello User
              </div>
             
              <button className="w-28 bg-black text-white p-3 text-lg font-bold rounded-full md:w-24">
                Logout
              </button>
            </div>

            <div>
              <div className="w-full h-[0.5px] mt-5 bg-[#dfdfdf]" />
              <div className="flex flex-col gap-2 mt-20 px-8 text-start">
                {options.map((option) => (
                  <a
                    key={option}
                    href="/"
                    className="text-lg font-light text-black hover:underline"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}