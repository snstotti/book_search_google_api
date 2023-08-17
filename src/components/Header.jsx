import React from 'react'
import { useForm } from 'react-hook-form';
import FlashAlert from './FlashAlert';
import Input from './Shared/Input';
import Select from './Shared/Select';

const Header = ({getSearchData}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit =(data)=> {
        getSearchData(data);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(onSubmit);
        }
    };

    return (
        <div className="row justify-content-center mt-4">
            {/* <img src="https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg" alt="" srcset="" className="opacity-50" /> */}
            <form className="col-lg-6 col" onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
                <h1 className="text-center">Book search</h1>
                <div className="input-group mb-3">
                    <Input className="w-auto" {...register("search_book",{required:"Поле обязательно к заполнению"})} errors={errors.search_book} />
                    <button className="btn btn-outline-secondary" type="submit" >Search</button>
                    {errors.search_book && <div class="invalid-feedback">This field is required </div>}
                </div>
                <div className="d-flex justify-content-between">
                    <div className="">
                        <Select label={'Categories'} defaultValue={'all'} {...register("categories") } >
                            <option value="all">All</option>
                            <option value="art">Art</option>
                            <option value="biography">Biography</option>
                            <option value="computers">Computers</option>
                            <option value="history">History</option>
                            <option value="medical">Medical</option>
                            <option value="poetry">Poetry</option>
                        </Select>
                    </div>
                    <div className="">
                    <Select label={'Sorting by'} defaultValue={'relevance'} {...register("sorting_by") } >
                         <option value="relevance">Relevance</option>
                            <option value="newest">Newest</option>
                    </Select>
                       
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Header