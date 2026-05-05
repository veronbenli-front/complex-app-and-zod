import { createLazyFileRoute } from '@tanstack/react-router'
import Icons from '@/components/icons'
import "../App.css";
import CounterBox from '@/components/counter-box';
import TodoList from '@/components/todo-list';
import Form from '@/components/form';


export const Route = createLazyFileRoute('/allProgres')({
    component: AllProgres,
})

function AllProgres() {
    return (
        <div className="min-h-screen w-full bg-gray-700 flex flex-col items-center justify-start">
            <Icons />
            <CounterBox />
            <TodoList />
            <Form />
        </div>
    );
}
