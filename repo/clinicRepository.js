/**
 * Define Repository Class
 *
 */
'use strict'

const axios = require('axios')
var _ = require('underscore')

class ClinicRepository {
  constructor() {
    this.loadData()
  }

  /**
   * Loadig Inital data invoked in the constructor
   *
   */
  loadData() {
    let url1 =
      'https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json'
    let url2 =
      'https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json'
    let jsonObj = []
    let itemCount = 0

    ;(async () => {
      try {
        await axios
          .get(url1)
          .then(function (response) {
            const res = response.data
            for (let x in res) {
              let item = {}
              item['id'] = itemCount + 1
              item['ClinicName'] = res[x].name
              item['State'] = res[x].stateName
              item['Availability'] =
                'from:' +
                res[x].availability['from'] +
                ', to:' +
                res[x].availability['to']
              jsonObj.push(item)
              itemCount = itemCount + 1
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })

        await axios
          .get(url2)
          .then(function (response) {
            const res = response.data
            for (let x in res) {
              let item = {}
              itemCount = itemCount + 1
              item['id'] = itemCount
              item['ClinicName'] = res[x].clinicName
              item['State'] = res[x].stateCode
              item['Availability'] =
                'from:' +
                res[x].opening['from'] +
                ', to:' +
                res[x].opening['to']
              jsonObj.push(item)
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })

        this.clinics = jsonObj
      } catch (error) {
        console.log(error.response.body)
      }
    })()
  }
  /**
   * /clinic/get/:id
   * return json data
   */
  getById(id) {
    return _.where(this.clinics, { id: id })
  }

  /**
   * /clinic/all
   * return json data
   */
  getAll() {
    return this.clinics
  }

  /**
   * /clinic/search?ClinicName=Mayo Clinic&State=Florida&Availability=from:00:00, to:24:00
   * return json data
   */
  searchClinicData(ClinicName, State, Availability) {
    let filtered = this.clinics

    if (ClinicName) filtered = _.where(filtered, { ClinicName: ClinicName })

    if (State) filtered = _.where(filtered, { State: State })

    if (Availability)
      filtered = _.where(filtered, { Availability: Availability })

    return filtered
  }
}

const clinicRepository = new ClinicRepository()

module.exports = clinicRepository
