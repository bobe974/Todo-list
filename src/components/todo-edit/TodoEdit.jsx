import { useForm } from "react-hook-form"
import { useContext } from "react";
import { applicationContext } from '../../context/ApplicaitonContextProvider'

export default function TodoEdit() {

  //recupere le contexte 
  const {state, updateState} = useContext(applicationContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (tache) => updateState(tache)//console.log(data.title)


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-4">
  <div className="mb-4">
    <label htmlFor="title" className="block mb-2">Tâche à effectuer</label>
    <input
      {...register("title", { required: true })}
      type="text"
      id="title"
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
      placeholder="Entrez la tâche à effectuer"
    />
    {errors.title && <span className="text-red-500">Ce champ est requis</span>}
  </div>
  
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
    Ajouter
  </button>
</form>

  )
}