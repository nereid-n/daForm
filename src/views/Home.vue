<template>
  <v-container grid-list-xl>
    <v-form>
      <component v-for="item in inputs"
                 :is="item.component"
                 :name="item.data.name"
                 v-model="value[item.data.name]"
                 v-validate="item.rules"
                 :data="item.data"
                 :error="errors.first(item.data.name)"
                 :key="item.name"
      />
    </v-form>
  </v-container>
</template>

<script>
  import InputText from "../components/form/InputText";
  import InputSelect from "../components/form/InputSelect";
  import InputTextarea from "../components/form/InputTextarea";
  import InputUpload from "../components/form/InputUpload";
  import InputPhone from "../components/form/InputPhone";
  import InputAutocomplete from "../components/form/InputAutocomplete";
  import Editor from "../components/form/Editor";
  export default {
    name: 'Home',
    components: {Editor, InputAutocomplete, InputPhone, InputUpload, InputTextarea, InputSelect, InputText},
    data() {
      return {
        inputs: [
          {
            component: 'InputText',
            rules: {
              required: true,
              max: 255
            },
            data: {
              name: 'Company[name]',
              label: 'Название',
              hint: 'Введите название компании'
            }
          },
          {
            component: 'InputAutocomplete',
            rules: {
              required: true
            },
            data: {
              name: 'Company[city_id]',
              label: 'Город',
              hint: 'Выберите город из списка',
              items: []
            }
          },
          {
            component: 'InputText',
            rules: {
              required: true,
              max: 255
            },
            data: {
              name: 'Company[address]',
              label: 'Адрес',
              hint: 'Адрес центрального офиса компании без упоминания города.'
            }
          },
          {
            component: 'InputUpload',
            data: {
              name: 'Company[photo]',
              label: 'Логотип'
            }
          },
          {
            component: 'InputSelect',
            rules: {
              required: true
            },
            data: {
              name: 'Company[start_page]',
              label: 'Главная страница',
              hint: 'Раздел профиля компании, который будет стартовым после перехода пользователем на визитку предприятия.',
              items: [
                {
                  text: 'О компании',
                  value: '1'
                },
                {
                  text: 'Отзывы',
                  value: '2'
                },
                {
                  text: 'Акции',
                  value: '3'
                },
                {
                  text: 'Товары',
                  value: '4'
                },
                {
                  text: 'Новости',
                  value: '5'
                },
                {
                  text: 'Статистика',
                  value: '6'
                },
                {
                  text: 'Карта',
                  value: '7'
                },
                {
                  text: 'Услуги',
                  value: '8'
                }
              ]
            }
          },
          {
            component: 'InputText',
            rules: {
              required: true,
              email: true
            },
            data: {
              name: 'Ads[email]',
              label: 'Email',
              hint: 'Вы можете указать публичный емейл в личном кабинете'
            }
          },
          {
            component: 'InputTextarea',
            rules: {
              required: true,
              max: 1000
            },
            data: {
              name: 'Company[delivery]',
              label: 'Доставка',
              hint: 'Введите информацию о доставке Вашей компании. Если компания не осуществляет доставку, оставьте поле пустым.'
            }
          },
          {
            component: 'InputTextarea',
            rules: {
              required: true,
              max: 1000
            },
            data: {
              name: 'Company[payment]',
              label: 'Оплаты',
              hint: 'Способы оплаты, которые доступны клиентам компании.'
            }
          },
          {
            component: 'InputText',
            rules: {
              required: true,
              email: true
            },
            data: {
              name: 'SocCompany[0][link]',
              label: 'Вконтакте',
              addLabel: 'Соц. сети компании',
              icon: 'fab fa-vk'
            }
          },
          {
            component: 'InputText',
            rules: {
              required: true,
              email: true
            },
            data: {
              name: 'SocCompany[1][link]',
              label: 'Одноклассники',
              icon: 'fab fa-odnoklassniki'
            }
          },
          {
            component: 'InputText',
            rules: {
              required: true,
              email: true
            },
            data: {
              name: 'SocCompany[2][link]',
              label: 'Facebook',
              icon: 'fab fa-facebook'
            }
          },
          {
            component: 'Editor',
            data: {
              name: 'Company[descr]',
              label: 'О компании'
            }
          },
          {
            component: 'InputUpload',
            data: {
              name: 'sliderImg[]',
              label: 'Иллюстрации для слайдера',
              multiple: true
            }
          },
        ],
        value: {}
      }
    }
  }
</script>
