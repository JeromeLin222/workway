/**  
 * Reusable button component with multiple variants
 * 
 *  @param {object} props - Component props
 *  @param {"filled" | "outlined"} [props.type="filled"] - Button style variant
 *  @param {"primary" | "secondary"} [props.color="primary"] - Button color theme
 *  @param {"sm" | "md" | "lg"} [props.size="md"] - Button size
 *  @param {"string"} [props.iconUrl] - Optional icon image URL
 *  @param {() => void} [props.clickEvent] - Click event handler
 * 
*/
export function ButtonComponent({
  type = "filled",
  color = "primary",
  size = "md",
  iconUrl = null,
  clickEvent = null,
  className = "",
  children
}) {
  const typeMap = {
    filled: {
      primary: "bg-black text-white hover:bg-secondary hover:text-black",
      secondary: "bg-secondary hover:bg-primary hover:text-white",
    },
    outlined:{
      primary: "bg-white border border-natural-85 hover:border-natural-90 hover:bg-natural-90",
    } 
  }
  const sizeMap = {
    lg: "px-5 py-4 text-title-2xl",
    md: "pl-4 pr-2 py-3",
    sm: "px-2 py-1 text-body-sm text-natural-50",
    custom: ""
  }

  const baseClass = "rounded-2xl flex items-center justify-center gap-1"
  const buttonClass = `${baseClass} ${typeMap[type][color]} ${sizeMap[size]} ${className}`


  return(
    <button
      type="button"
      className={buttonClass}
      onClick={clickEvent}
    >
      {children}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="inline-block leading-none"/>
      )}
    </button>
  );
}