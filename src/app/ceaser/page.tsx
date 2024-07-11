import { platform } from "os";
import NavBar from "../ui/NavBar";

export default function Page() {
  return (
    <main>
        <NavBar />
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </main>
  );
}

let alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function ceaserEncript(key: bigint, plaintext: string) {
    let result: string = ""
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        const charIndex = alphabet.indexOf(char);
        const newIndex = (charIndex + Number(key)) % 26;
        result += alphabet[newIndex];
      }
      return result;

}
function ceaserDecript(key: bigint, ciphertext: string) {
    let result: string = ""
    for (let i = 0; i < ciphertext.length; i++) {
        const char = ciphertext[i];
        const charIndex = alphabet.indexOf(char);
        const newIndex = (charIndex - Number(key)) % 26;
        result += alphabet[newIndex];
      }
      return result;
}