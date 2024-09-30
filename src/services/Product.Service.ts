import axios from "axios";
import { serverApi } from "../lib/config";
import { Course, CourseInquery } from "../lib/data/types/course";

class ProductService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }
  public async getCourses(input: CourseInquery): Promise<Course> {
    try {
      let url = `${this.path}/course/all/?order=${input.order}&page=${input.page}&limit=${input.limit}`;
      if (input.courseCategory)
        url += `&courseCategory=${input.courseCategory}`;
      if (input.search) url += `&search=${input.search}`;
      const result = await axios.get(url);
      console.log("getCourses:", result);
      return result.data;
    } catch (err) {
      console.log("Error, getCourses:", err);
      throw err;
    }
  }
}
export default ProductService;
