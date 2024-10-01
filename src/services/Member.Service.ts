import axios from "axios";
import { Console } from "console";
import { locale } from "moment";
import { serverApi } from "../lib/config";
import { LoginInput, Member, MemberInput } from "../lib/data/types/member";
class MemberService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }
  public async getTopUsers(): Promise<Member[]> {
    try {
      let url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("getTopUsers:", result);
      return result.data;
    } catch (err) {
      console.log("Error, getTopUsers:", err);
      throw err;
    }
  }

  public async getAcademia(): Promise<Member[]> {
    try {
      let url = this.path + "/member/academia";
      const result = await axios.get(url);
      console.log("getAcademia:", result);
      const academia: Member = result.data;
      return academia as unknown as Member[];
    } catch (err) {
      console.log("Error, getAcademia:", err);
      throw err;
    }
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("signup:", result);
      const member: Member = result.data.member;
      console.log(member);
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error, signup:", err);
      throw err;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("login:", result);
      const member: Member = result.data.member;
      console.log(member);
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error, login:", err);
      throw err;
    }
  }

  public async logout(): Promise<void> {
    try {
      const url = this.path + "/member/logout";
      const result = await axios.post(url, {}, { withCredentials: true });
      console.log("logout:", result);
      localStorage.removeItem("memberData");
    } catch (err) {
      console.log("Error, logout:", err);
      throw err;
    }
  }
}
export default MemberService;
