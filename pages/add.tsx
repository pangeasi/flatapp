import { InputPicture } from "../components/shared/inputPicture/InputPicture";
import { Input } from "../components/shared/inputs/Input";
import { useForm, Controller } from "react-hook-form";
import { saveProduct } from "../utils/fetches/saveProduct";
import { Layout } from "../components/UI/Layout/Layout";

const Add = () => {
  const { register, handleSubmit, control, setValue, errors } = useForm();
  const onSubmit = async (data) => {
    const product = await saveProduct(data);
    if (product) {
      location.href = "/";
    }
  };
  return (
    <Layout>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="picture"
          control={control}
          rules={{ required: true }}
          render={() => (
            <InputPicture setValue={setValue} errors={errors.picture} />
          )}
        />
        <Input
          errors={errors.productName}
          register={register({ required: true })}
          label="Product name"
          name="productName"
        />
        <Input
          errors={errors.price}
          register={register({ required: true })}
          label="Price/m2"
          name="price"
          type="number"
        />
        <input type="submit" value="Add product" />
      </form>
    </Layout>
  );
};

export default Add;
