import { useState } from "react";

const usePasswordGenerator = () => {
    const [password, setPassword] = useState("");

    const generatePassword =(pwdLen,checkBoxData)=>{
        const selectedCheckBox=checkBoxData.filter((c)=>c.state)
        let charset = "",generatedPassword = ""; 
        
        selectedCheckBox.forEach(element => {
            switch(element.title)
            {
                case "Include Uppercase Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                  case "Include Lowercase Letters":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                  case "Include Number":
                    charset += "0123456789";
                    break;
                  case "Include Symbols":
                    charset += "!@#$%^&*()";
                    break;
                  default:
                    break;
                
            }
        });

        for (let i = 0; i < pwdLen; i++) {
            const randomIndex = Math.floor(Math.random() * charset?.length);
            generatedPassword += charset[randomIndex];
          }
      
          setPassword(generatedPassword);

    }

    return { password, generatePassword };
}

export default usePasswordGenerator